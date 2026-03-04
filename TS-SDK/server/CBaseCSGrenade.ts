// generated - do not edit!

import {server_CCSWeaponBase} from './CCSWeaponBase';
// Class size: 0x1170
// BaseClass: : public CS2::server::CCSWeaponBase
export const server_CBaseCSGrenade  = {
	...server_CCSWeaponBase,
	m_bRedraw: 4400n, // bool m_bRedraw; |  0x1130 | Schema_Builtin | Size: 0x1
	m_bIsHeldByPlayer: 4401n, // bool m_bIsHeldByPlayer; |  0x1131 | Schema_Builtin | Size: 0x1
	m_bPinPulled: 4402n, // bool m_bPinPulled; |  0x1132 | Schema_Builtin | Size: 0x1
	m_bJumpThrow: 4403n, // bool m_bJumpThrow; |  0x1133 | Schema_Builtin | Size: 0x1
	m_bThrowAnimating: 4404n, // bool m_bThrowAnimating; |  0x1134 | Schema_Builtin | Size: 0x1
	m_fThrowTime: 4408n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flThrowStrength: 4412n, // float32 m_flThrowStrength; |  0x113c | Schema_Builtin | Size: 0x4
	m_fDropTime: 4416n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fPinPullTime: 4420n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bJustPulledPin: 4424n, // bool m_bJustPulledPin; |  0x1148 | Schema_Builtin | Size: 0x1
	m_nNextHoldTick: 4428n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_flNextHoldFrac: 4432n, // float32 m_flNextHoldFrac; |  0x1150 | Schema_Builtin | Size: 0x4
	m_hSwitchToWeaponAfterThrow: 4436n, // GlobalTypes::CHandle<server::CCSWeaponBase>  | Schema_Atomic | Size: 0x4
}
