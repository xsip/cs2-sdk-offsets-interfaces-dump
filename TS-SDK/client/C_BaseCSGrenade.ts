// generated - do not edit!

import {client_C_CSWeaponBase} from './C_CSWeaponBase';
// Class size: 0x2000
// BaseClass: : public CS2::client::C_CSWeaponBase
export const client_C_BaseCSGrenade  = {
	...client_C_CSWeaponBase,
	m_bClientPredictDelete: 8000n, // bool m_bClientPredictDelete; |  0x1f40 | Schema_Builtin | Size: 0x1
	m_bRedraw: 8001n, // bool m_bRedraw; |  0x1f41 | Schema_Builtin | Size: 0x1
	m_bIsHeldByPlayer: 8002n, // bool m_bIsHeldByPlayer; |  0x1f42 | Schema_Builtin | Size: 0x1
	m_bPinPulled: 8003n, // bool m_bPinPulled; |  0x1f43 | Schema_Builtin | Size: 0x1
	m_bJumpThrow: 8004n, // bool m_bJumpThrow; |  0x1f44 | Schema_Builtin | Size: 0x1
	m_bThrowAnimating: 8005n, // bool m_bThrowAnimating; |  0x1f45 | Schema_Builtin | Size: 0x1
	m_fThrowTime: 8008n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flThrowStrength: 8016n, // float32 m_flThrowStrength; |  0x1f50 | Schema_Builtin | Size: 0x4
	m_fDropTime: 8136n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fPinPullTime: 8140n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bJustPulledPin: 8144n, // bool m_bJustPulledPin; |  0x1fd0 | Schema_Builtin | Size: 0x1
	m_nNextHoldTick: 8148n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_flNextHoldFrac: 8152n, // float32 m_flNextHoldFrac; |  0x1fd8 | Schema_Builtin | Size: 0x4
	m_hSwitchToWeaponAfterThrow: 8156n, // GlobalTypes::CHandle<client::C_CSWeaponBase>  | Schema_Atomic | Size: 0x4
}
