import LogoffSVG from "../../public/img/icons/logoff.svg"
import useUser from "../../lib/auth/useUser"
import { useRouter } from "next/router"

const HeaderLogoff = () => {
  const { mutateUser } = useUser()
  const router = useRouter()

  const logoff = async (e) => {
    e.preventDefault()

    mutateUser (
      await fetch("/api/auth/logoffUser", { 
        method: "POST" 
      }),
      false,
    );
    router.push("/login");
  }

  return (
    <button onClick={ logoff } className="log-off">
      <LogoffSVG />
    </button>
  )
}

export default HeaderLogoff
