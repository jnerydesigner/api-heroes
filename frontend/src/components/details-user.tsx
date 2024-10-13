import { fecthUser } from "@/api/login";

import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarImage } from "./ui/avatar";
import { IoIosArrowDropdown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { useToken } from "@/context/token.context";

interface UserToken {
  token: string | null;
}

export interface UserResponse {
  username: string;
  image: string;
}

export const DetailsUser: React.FC<UserResponse> = ({ username, image }) => {
  const navigate = useNavigate();
  const { setTokenCtx } = useToken();
  const handleLogout = () => {
    localStorage.removeItem("tokenHeroesApi");
    setTokenCtx("");
    navigate("/");
  };
  return (
    <>
      <Avatar>
        <AvatarImage src={image} />
      </Avatar>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-center items-center flex-row">
          <span>Detalhes</span> <IoIosArrowDropdown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{username}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to="/create-hero">Create Hero or Vilain</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>
            <button onClick={handleLogout}>Logout</button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
