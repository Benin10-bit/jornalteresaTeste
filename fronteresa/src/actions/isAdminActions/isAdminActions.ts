import { ADMIN_ROUTES, NOT_ADMIN_ROUTES } from "@/constants/adminRoutes";
import { API_MAIN_ROUTE } from "@/constants/apiRoute";

export async function isAdminActions() {
  const response = await fetch(API_MAIN_ROUTE + "/me", {
    credentials: "include",
  });

  const data = await response.json()

  if (!response.ok){
    return NOT_ADMIN_ROUTES
  }

  if (data.user.role == "ADMIN"){
    return ADMIN_ROUTES
  }

  return NOT_ADMIN_ROUTES
}
