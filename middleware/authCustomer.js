export default function ({ redirect, $strapi }) {
  if (!$strapi.user || $strapi.user.role.name!="Customer") {
    return redirect('/login')
  }
}