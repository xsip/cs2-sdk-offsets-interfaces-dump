// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x910
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CFuncRotator  = {
	...server_CBaseModelEntity,
	m_hRotatorTarget: 1840n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_bIsRotating: 1844n, // bool m_bIsRotating; |  0x734 | Schema_Builtin | Size: 0x1
	m_bIsReversing: 1845n, // bool m_bIsReversing; |  0x735 | Schema_Builtin | Size: 0x1
	m_flTimeToReachMaxSpeed: 1848n, // float32 m_flTimeToReachMaxSpeed; |  0x738 | Schema_Builtin | Size: 0x4
	m_flTimeToReachZeroSpeed: 1852n, // float32 m_flTimeToReachZeroSpeed; |  0x73c | Schema_Builtin | Size: 0x4
	m_flDistanceAlongArcTraveled: 1856n, // float32 m_flDistanceAlongArcTraveled; |  0x740 | Schema_Builtin | Size: 0x4
	m_flTimeToWaitOscillate: 1860n, // float32 m_flTimeToWaitOscillate; |  0x744 | Schema_Builtin | Size: 0x4
	m_flTimeRotationStart: 1864n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_qLSPrevChange: 1872n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_qWSPrev: 1888n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_qWSInit: 1904n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_qLSInit: 1920n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_qLSOrientation: 1936n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_OnRotationStarted: 1952n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnRotationCompleted: 1976n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnOscillate: 2000n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnOscillateStartArrive: 2024n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnOscillateStartDepart: 2048n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnOscillateEndArrive: 2072n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnOscillateEndDepart: 2096n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_bOscillateDepart: 2120n, // bool m_bOscillateDepart; |  0x848 | Schema_Builtin | Size: 0x1
	m_nOscillateCount: 2124n, // int32_t m_nOscillateCount; |  0x84c | Schema_Builtin | Size: 0x4
	m_eRotateType: 2128n, // server::CFuncRotator::Rotate_t  | Schema_DeclaredEnum | Size: 0x4
	m_ePrevRotateType: 2132n, // server::CFuncRotator::Rotate_t  | Schema_DeclaredEnum | Size: 0x4
	m_bHasTargetOverride: 2136n, // bool m_bHasTargetOverride; |  0x858 | Schema_Builtin | Size: 0x1
	m_qOrientationOverride: 2144n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_eSpaceOverride: 2160n, // server::RotatorTargetSpace_t  | Schema_DeclaredEnum | Size: 0x4
	m_qAngularVelocity: 2164n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vLookAtForcedUp: 2176n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_strRotatorTarget: 2192n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bRecordHistory: 2200n, // bool m_bRecordHistory; |  0x898 | Schema_Builtin | Size: 0x1
	m_vecRotatorHistory: 2208n, // GlobalTypes::CUtlVector<server::RotatorHistoryEntry_t>  | Schema_Atomic | Size: 0x18
	m_bReturningToPreviousOrientation: 2232n, // bool m_bReturningToPreviousOrientation; |  0x8b8 | Schema_Builtin | Size: 0x1
	m_vecRotatorQueue: 2240n, // GlobalTypes::CUtlVector<server::RotatorQueueEntry_t>  | Schema_Atomic | Size: 0x18
	m_vecRotatorQueueHistory: 2264n, // GlobalTypes::CUtlVector<server::RotatorHistoryEntry_t>  | Schema_Atomic | Size: 0x18
	m_eSolidType: 2288n, // client::SolidType_t  | Schema_DeclaredEnum | Size: 0x1
	m_hSpeedFromMover: 2292n, // GlobalTypes::CHandle<server::CFuncMover>  | Schema_Atomic | Size: 0x4
	m_iszSpeedFromMover: 2296n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flSpeedScale: 2304n, // float32 m_flSpeedScale; |  0x900 | Schema_Builtin | Size: 0x4
	m_flMinYawRotation: 2308n, // float32 m_flMinYawRotation; |  0x904 | Schema_Builtin | Size: 0x4
	m_flMaxYawRotation: 2312n, // float32 m_flMaxYawRotation; |  0x908 | Schema_Builtin | Size: 0x4
}
