import {SingUp} from "../components/SingUp";
import {SingIn} from "../components/SingIn";
import {NewMailing} from "../components/NewMailing";
import {MailingLists} from "../components/MailingLists";

export const Public = [
		{
			path:'/singIn',
			component:SingIn,
			exact: true,
		},
		{
			path:'/singUp',
			component:SingUp,
			exact: true,
		}
	]
	export const Private = [
		{
			path:'/newMailing',
			component: NewMailing,
			exact: true,
		},
		{
			path:'/mailingLists',
			component: MailingLists,
			exact: true,
		},
	]
