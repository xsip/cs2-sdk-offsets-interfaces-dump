// generated - do not edit!

import {server_CPhysConstraint} from './CPhysConstraint';
// Class size: 0x678
// BaseClass: : public CS2::server::CPhysConstraint
export const server_CPhysHinge  = {
	...server_CPhysConstraint,
	m_soundInfo: 1296n, // server::ConstraintSoundInfo  | Schema_DeclaredClass | Size: 0x98
	m_NotifyMinLimitReached: 1448n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_NotifyMaxLimitReached: 1472n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_bAtMinLimit: 1496n, // bool m_bAtMinLimit; |  0x5d8 | Schema_Builtin | Size: 0x1
	m_bAtMaxLimit: 1497n, // bool m_bAtMaxLimit; |  0x5d9 | Schema_Builtin | Size: 0x1
	m_hinge: 1500n, // vphysics2::constraint_hingeparams_t  | Schema_DeclaredClass | Size: 0x40
	m_hingeFriction: 1564n, // float32 m_hingeFriction; |  0x61c | Schema_Builtin | Size: 0x4
	m_systemLoadScale: 1568n, // float32 m_systemLoadScale; |  0x620 | Schema_Builtin | Size: 0x4
	m_bIsAxisLocal: 1572n, // bool m_bIsAxisLocal; |  0x624 | Schema_Builtin | Size: 0x1
	m_flMinRotation: 1576n, // float32 m_flMinRotation; |  0x628 | Schema_Builtin | Size: 0x4
	m_flMaxRotation: 1580n, // float32 m_flMaxRotation; |  0x62c | Schema_Builtin | Size: 0x4
	m_flInitialRotation: 1584n, // float32 m_flInitialRotation; |  0x630 | Schema_Builtin | Size: 0x4
	m_flMotorFrequency: 1588n, // float32 m_flMotorFrequency; |  0x634 | Schema_Builtin | Size: 0x4
	m_flMotorDampingRatio: 1592n, // float32 m_flMotorDampingRatio; |  0x638 | Schema_Builtin | Size: 0x4
	m_flAngleSpeed: 1596n, // float32 m_flAngleSpeed; |  0x63c | Schema_Builtin | Size: 0x4
	m_flAngleSpeedThreshold: 1600n, // float32 m_flAngleSpeedThreshold; |  0x640 | Schema_Builtin | Size: 0x4
	m_flLimitsDebugVisRotation: 1604n, // float32 m_flLimitsDebugVisRotation; |  0x644 | Schema_Builtin | Size: 0x4
	m_OnStartMoving: 1608n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnStopMoving: 1632n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
}
