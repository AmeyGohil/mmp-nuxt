<template>
  <v-timeline
    align-top
    dense
  >
    <v-timeline-item
      v-for="(obj,i) in timelineForSelectedOrder"
      v-bind:key="i"
      v-bind:color="obj.color"
      v-bind:icon="obj.icon"
      fill-dot
    >
      <v-card>
          <v-card-text>
              <div class="row">
                  <div class="col-xs-4">
                      <p v-if="status > i">
                          Time
                      </p>
                  </div>
                  <div class="col-xs-8" v-if="status > i">
                      <strong>{{obj.text}}</strong>
                  </div>
              </div>
          </v-card-text>
      </v-card>
    </v-timeline-item>
      <v-slide-x-transition
          group
      >
          <v-timeline-item
          v-for="event in computed_messages"
          :key="event.id"
          class="white--text  mb-3"
          color="pink"
          medium
          >
          <template v-slot:icon>
              <span>{{event.sender}}</span>
          </template>
          <v-card justify-space-between>
              <v-card-text xs7 v-text="event.message"></v-card-text>
              <v-card-actions xs5 text-xs-right v-text="event.created_at"></v-card-actions>
          </v-card>
          </v-timeline-item>
      </v-slide-x-transition>
      <v-timeline-item
          fill-dot
          class="white--text mb-5"
          color="orange"
          large
      >
          <template v-slot:icon>
          <span>C</span>
          </template>
          <v-text-field
          v-model="updateMessage"
          hide-details
          flat
          label="Have a query..."

          @keydown.enter="postMessage"
          >
          <template v-slot:append>
              <v-btn
              class="mx-0"
              depressed
              @click="postMessage"
              >
              Post
              </v-btn>
          </template>
          </v-text-field>
      </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props:['status','order_id'],
  data(){
    return{
      timelineSteps:[
        {
            status:1,
            text:'The Order is being processed',
            shortText:'Processing',
            color:'green',
            icon: 'mdi-cart'
        },
        {
            status:2,
            text:"Manufacturer has accepted the order",
            shortText:'Quotes Available',
            color:'purple',
            icon: 'mdi-hammer-wrench'
        },
        {
            status:3,
            text:"Order has been confirmed and Work is going on",
            shortText:'Confirmed',
            color:'yellow darken-4',
            icon: 'mdi-factory'
        },
        {
            status:4,
            text:"Order has been Delieverd",
            shortText:'Delivered',
            color:'green',
            icon: 'mdi-truck-delivery'
        }
      ],
      messages:[],
      updateMessage:null
    }
  },
  mounted(){
    this.fetchMessages()
    // console.debug(this.$strapi.user)
  },
  methods:{
    async postMessage(){
        const time = (new Date()).toTimeString()
        let id = this.computed_messages.length>0 ? this.computed_messages.reduce((a,b)=>a.id>b.id?a:b).id : 0
        let Message = {
            id: id,
            message: this.updateMessage,
            sender: 'M',
            created_at: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
                return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
            })
        }
      // update server
      let user_id = this.$strapi.user.id
      await this.$strapi.create('conversations',{
        'message': this.updateMessage,
        'users_permissions_user': user_id,
        'order': this.order_id
      })
        this.messages.push(Message)
        this.updateMessage = null
    },
    async fetchMessages(){
      //fetch data
      console.log("id",this.$strapi.user.id)
      let id = this.$strapi.user.id
      let Messages = await this.$strapi.find('conversations',{'users_permissions_user.id': `${id}`,'order.id': this.order_id})
      this.messages = Messages
      
    }
  },
  
  computed:{
    timelineForSelectedOrder(){
      return this.timelineSteps.slice(0,this.status);
    },
    computed_messages(){
      return this.messages.map(item=>({
        id: item.id,
        message: item.message,
        created_at: item.created_at.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
            return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
        }),
        sender: item.users_permissions_user.role==='1' ? 'C' : 'M'
      }))
    }
  }
}
</script>

<style>

</style>