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
          v-for="event in updateMsgs"
          :key="event.id"
          class="white--text  mb-3"
          color="pink"
          medium
          >
          <template v-slot:icon>
              <span>{{event.sender}}</span>
          </template>
          <v-card justify-space-between>
              <v-card-text xs7 v-text="event.msg"></v-card-text>
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
          v-model="updateMsg"
          hide-details
          flat
          label="Have a query..."

          @keydown.enter="postMsg"
          >
          <template v-slot:append>
              <v-btn
              class="mx-0"
              depressed
              @click="postMsg"
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
  props:['status'],
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
      updateMsgs:[],
      updateMsg:null
    }
  },
  methods:{
    postMsg(){
        const time = (new Date()).toTimeString()
        let id = this.updateMsgs.length>0 ? this.updateMsgs.reduce((a,b)=>a.id>b.id?a:b).id : 0
        let msg = {
            id: id,
            msg: this.updateMsg,
            sender: 'M',
            created_at: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
                return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
            })
        }
      // update server
        this.updateMsgs.push(msg)
        this.updateMsg = null
    },
    fetchMsgs(){
      //fetch data
    }
  },
  
  computed:{
    timelineForSelectedOrder(){
      return this.timelineSteps.slice(0,this.status);
    }
  }
}
</script>

<style>

</style>