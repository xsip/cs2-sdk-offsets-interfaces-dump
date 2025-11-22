// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x8D0
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CFuncRotating  = {
	...server_CBaseModelEntity,
	m_OnStopped: 2008n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnStarted: 2048n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnReachedStart: 2088n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_localRotationVector: 2128n, // GlobalTypes::RotationVector  | Schema_Atomic | Size: 0xc
	m_flFanFriction: 2140n, // float32 m_flFanFriction; |  0x85c | Schema_Builtin | Size: 0x4
	m_flAttenuation: 2144n, // float32 m_flAttenuation; |  0x860 | Schema_Builtin | Size: 0x4
	m_flVolume: 2148n, // float32 m_flVolume; |  0x864 | Schema_Builtin | Size: 0x4
	m_flTargetSpeed: 2152n, // float32 m_flTargetSpeed; |  0x868 | Schema_Builtin | Size: 0x4
	m_flMaxSpeed: 2156n, // float32 m_flMaxSpeed; |  0x86c | Schema_Builtin | Size: 0x4
	m_flBlockDamage: 2160n, // float32 m_flBlockDamage; |  0x870 | Schema_Builtin | Size: 0x4
	m_NoiseRunning: 2168n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bReversed: 2176n, // bool m_bReversed; |  0x880 | Schema_Builtin | Size: 0x1
	m_bAccelDecel: 2177n, // bool m_bAccelDecel; |  0x881 | Schema_Builtin | Size: 0x1
	m_prevLocalAngles: 2200n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_angStart: 2212n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_bStopAtStartPos: 2224n, // bool m_bStopAtStartPos; |  0x8b0 | Schema_Builtin | Size: 0x1
	m_vecClientOrigin: 2228n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecClientAngles: 2240n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
}
