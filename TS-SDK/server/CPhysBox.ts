// generated - do not edit!

import {server_CBreakable} from './CBreakable';
// Class size: 0x8D0
// BaseClass: : public CS2::server::CBreakable
export const server_CPhysBox  = {
	...server_CBreakable,
	m_damageType: 2056n, // int32_t m_damageType; |  0x808 | Schema_Builtin | Size: 0x4
	m_damageToEnableMotion: 2060n, // int32_t m_damageToEnableMotion; |  0x80c | Schema_Builtin | Size: 0x4
	m_flForceToEnableMotion: 2064n, // float32 m_flForceToEnableMotion; |  0x810 | Schema_Builtin | Size: 0x4
	m_vHoverPosePosition: 2068n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angHoverPoseAngles: 2080n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_bNotSolidToWorld: 2092n, // bool m_bNotSolidToWorld; |  0x82c | Schema_Builtin | Size: 0x1
	m_bEnableUseOutput: 2093n, // bool m_bEnableUseOutput; |  0x82d | Schema_Builtin | Size: 0x1
	m_nHoverPoseFlags: 2094n, // server::HoverPoseFlags_t  | Schema_DeclaredEnum | Size: 0x1
	m_flTouchOutputPerEntityDelay: 2096n, // float32 m_flTouchOutputPerEntityDelay; |  0x830 | Schema_Builtin | Size: 0x4
	m_OnDamaged: 2104n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnAwakened: 2128n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnMotionEnabled: 2152n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnPlayerUse: 2176n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnStartTouch: 2200n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_hCarryingPlayer: 2224n, // GlobalTypes::CHandle<server::CBasePlayerPawn>  | Schema_Atomic | Size: 0x4
}
