// generated - do not edit!

import {client_CPlayerPawnComponent} from './CPlayerPawnComponent';
// Class size: 0xA0
// BaseClass: : public CS2::client::CPlayerPawnComponent
export const client_CPlayer_WeaponServices  = {
	...client_CPlayerPawnComponent,
	m_hMyWeapons: 64n, // client::C_NetworkUtlVectorBase<GlobalTypes::CHandle<client::C_BasePlayerWeapon>>  | Schema_Atomic | Size: 0x18
	m_hActiveWeapon: 88n, // GlobalTypes::CHandle<client::C_BasePlayerWeapon>  | Schema_Atomic | Size: 0x4
	m_hLastWeapon: 92n, // GlobalTypes::CHandle<client::C_BasePlayerWeapon>  | Schema_Atomic | Size: 0x4
	m_iAmmo: 96n, // uint16_t m_iAmmo[32]; |  0x60 | Schema_FixedArray | Size: 0x40
}
