// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0xA10
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CFuncRotator  = {
	...server_CBaseModelEntity,
	m_hRotatorTarget: 2008n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_bIsRotating: 2012n, // bool m_bIsRotating; |  0x7dc | Schema_Builtin | Size: 0x1
	m_bIsReversing: 2013n, // bool m_bIsReversing; |  0x7dd | Schema_Builtin | Size: 0x1
	m_flTimeToReachMaxSpeed: 2016n, // float32 m_flTimeToReachMaxSpeed; |  0x7e0 | Schema_Builtin | Size: 0x4
	m_flTimeToReachZeroSpeed: 2020n, // float32 m_flTimeToReachZeroSpeed; |  0x7e4 | Schema_Builtin | Size: 0x4
	m_flDistanceAlongArcTraveled: 2024n, // float32 m_flDistanceAlongArcTraveled; |  0x7e8 | Schema_Builtin | Size: 0x4
	m_flTimeToWaitOscillate: 2028n, // float32 m_flTimeToWaitOscillate; |  0x7ec | Schema_Builtin | Size: 0x4
	m_flTimeRotationStart: 2032n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_qLSPrevChange: 2048n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_qWSPrev: 2064n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_qWSInit: 2080n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_qLSInit: 2096n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_qLSOrientation: 2112n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_OnRotationStarted: 2128n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnRotationCompleted: 2168n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnOscillate: 2208n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnOscillateStartArrive: 2248n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnOscillateStartDepart: 2288n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnOscillateEndArrive: 2328n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnOscillateEndDepart: 2368n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_bOscillateDepart: 2408n, // bool m_bOscillateDepart; |  0x968 | Schema_Builtin | Size: 0x1
	m_nOscillateCount: 2412n, // int32_t m_nOscillateCount; |  0x96c | Schema_Builtin | Size: 0x4
	m_eRotateType: 2416n, // server::CFuncRotator::Rotate_t  | Schema_DeclaredEnum | Size: 0x4
	m_ePrevRotateType: 2420n, // server::CFuncRotator::Rotate_t  | Schema_DeclaredEnum | Size: 0x4
	m_bHasTargetOverride: 2424n, // bool m_bHasTargetOverride; |  0x978 | Schema_Builtin | Size: 0x1
	m_qOrientationOverride: 2432n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_eSpaceOverride: 2448n, // server::RotatorTargetSpace_t  | Schema_DeclaredEnum | Size: 0x4
	m_qAngularVelocity: 2452n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vLookAtForcedUp: 2464n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_strRotatorTarget: 2480n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bRecordHistory: 2488n, // bool m_bRecordHistory; |  0x9b8 | Schema_Builtin | Size: 0x1
	m_vecRotatorHistory: 2496n, // GlobalTypes::CUtlVector<server::RotatorHistoryEntry_t>  | Schema_Atomic | Size: 0x18
	m_bReturningToPreviousOrientation: 2520n, // bool m_bReturningToPreviousOrientation; |  0x9d8 | Schema_Builtin | Size: 0x1
	m_vecRotatorQueue: 2528n, // GlobalTypes::CUtlVector<server::RotatorQueueEntry_t>  | Schema_Atomic | Size: 0x18
	m_vecRotatorQueueHistory: 2552n, // GlobalTypes::CUtlVector<server::RotatorHistoryEntry_t>  | Schema_Atomic | Size: 0x18
}
