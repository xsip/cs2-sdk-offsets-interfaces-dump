// generated - do not edit!

import {client_CPlayerPawnComponent} from './CPlayerPawnComponent';
// Class size: 0xA8
// BaseClass: : public CS2::client::CPlayerPawnComponent
export const client_CPlayer_WeaponServices  = {
	...client_CPlayerPawnComponent,
	m_hMyWeapons: 72n, // client::C_NetworkUtlVectorBase<GlobalTypes::CHandle<client::C_BasePlayerWeapon>>  | Schema_Atomic | Size: 0x18
	m_hActiveWeapon: 96n, // GlobalTypes::CHandle<client::C_BasePlayerWeapon>  | Schema_Atomic | Size: 0x4
	m_hLastWeapon: 100n, // GlobalTypes::CHandle<client::C_BasePlayerWeapon>  | Schema_Atomic | Size: 0x4
	m_iAmmo: 104n, // uint16_t m_iAmmo[32]; |  0x68 | Schema_FixedArray | Size: 0x40
}
