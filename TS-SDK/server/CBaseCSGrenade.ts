// generated - do not edit!

import {server_CCSWeaponBase} from './CCSWeaponBase';
// Class size: 0x1210
// BaseClass: : public CS2::server::CCSWeaponBase
export const server_CBaseCSGrenade  = {
	...server_CCSWeaponBase,
	m_bRedraw: 4560n, // bool m_bRedraw; |  0x11d0 | Schema_Builtin | Size: 0x1
	m_bIsHeldByPlayer: 4561n, // bool m_bIsHeldByPlayer; |  0x11d1 | Schema_Builtin | Size: 0x1
	m_bPinPulled: 4562n, // bool m_bPinPulled; |  0x11d2 | Schema_Builtin | Size: 0x1
	m_bJumpThrow: 4563n, // bool m_bJumpThrow; |  0x11d3 | Schema_Builtin | Size: 0x1
	m_bThrowAnimating: 4564n, // bool m_bThrowAnimating; |  0x11d4 | Schema_Builtin | Size: 0x1
	m_fThrowTime: 4568n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flThrowStrength: 4572n, // float32 m_flThrowStrength; |  0x11dc | Schema_Builtin | Size: 0x4
	m_fDropTime: 4576n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fPinPullTime: 4580n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bJustPulledPin: 4584n, // bool m_bJustPulledPin; |  0x11e8 | Schema_Builtin | Size: 0x1
	m_nNextHoldTick: 4588n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_flNextHoldFrac: 4592n, // float32 m_flNextHoldFrac; |  0x11f0 | Schema_Builtin | Size: 0x4
	m_hSwitchToWeaponAfterThrow: 4596n, // GlobalTypes::CHandle<server::CCSWeaponBase>  | Schema_Atomic | Size: 0x4
}
