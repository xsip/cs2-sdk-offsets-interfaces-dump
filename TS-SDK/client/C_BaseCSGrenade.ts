// generated - do not edit!

import {client_C_CSWeaponBase} from './C_CSWeaponBase';
// Class size: 0x2040
// BaseClass: : public CS2::client::C_CSWeaponBase
export const client_C_BaseCSGrenade  = {
	...client_C_CSWeaponBase,
	m_bClientPredictDelete: 8064n, // bool m_bClientPredictDelete; |  0x1f80 | Schema_Builtin | Size: 0x1
	m_bRedraw: 8065n, // bool m_bRedraw; |  0x1f81 | Schema_Builtin | Size: 0x1
	m_bIsHeldByPlayer: 8066n, // bool m_bIsHeldByPlayer; |  0x1f82 | Schema_Builtin | Size: 0x1
	m_bPinPulled: 8067n, // bool m_bPinPulled; |  0x1f83 | Schema_Builtin | Size: 0x1
	m_bJumpThrow: 8068n, // bool m_bJumpThrow; |  0x1f84 | Schema_Builtin | Size: 0x1
	m_bThrowAnimating: 8069n, // bool m_bThrowAnimating; |  0x1f85 | Schema_Builtin | Size: 0x1
	m_fThrowTime: 8072n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flThrowStrength: 8080n, // float32 m_flThrowStrength; |  0x1f90 | Schema_Builtin | Size: 0x4
	m_fDropTime: 8200n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fPinPullTime: 8204n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bJustPulledPin: 8208n, // bool m_bJustPulledPin; |  0x2010 | Schema_Builtin | Size: 0x1
	m_nNextHoldTick: 8212n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_flNextHoldFrac: 8216n, // float32 m_flNextHoldFrac; |  0x2018 | Schema_Builtin | Size: 0x4
	m_hSwitchToWeaponAfterThrow: 8220n, // GlobalTypes::CHandle<client::C_CSWeaponBase>  | Schema_Atomic | Size: 0x4
}
