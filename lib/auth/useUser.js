import { useEffect } from "react";
import Router from "next/router";
import nc from 'next-connect'

export default function useUser() {
  const session = req.session.get('user')

  useEffect(() => {
    if(!session) {
      Router.push('/login')
    } else {
      Router.push('/')
    }
  })
}
