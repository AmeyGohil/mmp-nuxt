export default function ({ redirect, $strapi }) {
  if (!$strapi.user || $strapi.user.role.name!="customer") {
    return redirect('/login')
  }
}