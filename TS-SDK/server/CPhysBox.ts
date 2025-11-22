// generated - do not edit!

import {server_CBreakable} from './CBreakable';
// Class size: 0x9C8
// BaseClass: : public CS2::server::CBreakable
export const server_CPhysBox  = {
	...server_CBreakable,
	m_damageType: 2224n, // int32_t m_damageType; |  0x8b0 | Schema_Builtin | Size: 0x4
	m_damageToEnableMotion: 2228n, // int32_t m_damageToEnableMotion; |  0x8b4 | Schema_Builtin | Size: 0x4
	m_flForceToEnableMotion: 2232n, // float32 m_flForceToEnableMotion; |  0x8b8 | Schema_Builtin | Size: 0x4
	m_vHoverPosePosition: 2236n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angHoverPoseAngles: 2248n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_bNotSolidToWorld: 2260n, // bool m_bNotSolidToWorld; |  0x8d4 | Schema_Builtin | Size: 0x1
	m_bEnableUseOutput: 2261n, // bool m_bEnableUseOutput; |  0x8d5 | Schema_Builtin | Size: 0x1
	m_nHoverPoseFlags: 2262n, // server::HoverPoseFlags_t  | Schema_DeclaredEnum | Size: 0x1
	m_flTouchOutputPerEntityDelay: 2264n, // float32 m_flTouchOutputPerEntityDelay; |  0x8d8 | Schema_Builtin | Size: 0x4
	m_OnDamaged: 2272n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnAwakened: 2312n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnMotionEnabled: 2352n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnPlayerUse: 2392n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnStartTouch: 2432n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_hCarryingPlayer: 2472n, // GlobalTypes::CHandle<server::CBasePlayerPawn>  | Schema_Atomic | Size: 0x4
}
