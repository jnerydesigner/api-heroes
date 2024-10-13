import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DetailsUser, UserResponse } from "./details-user";
import { useQuery } from "@tanstack/react-query";
import { fecthUser } from "@/api/login";
import { useToken } from "@/context/token.context";

export const AccountMenu: React.FC = () => {
  const { tokenCtx } = useToken();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["detail-user"],
    queryFn: () => fecthUser<UserResponse>(tokenCtx || ""),
    enabled: !!tokenCtx,
  });

  const tokenExists = localStorage.getItem("tokenHeroesApi");

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      {tokenExists ? (
        <DetailsUser
          username={data?.username || ""}
          image={data?.image || ""}
        />
      ) : (
        <NavLink to="/login">
          <h2 className="relative">Login</h2>
        </NavLink>
      )}
    </div>
  );
};
