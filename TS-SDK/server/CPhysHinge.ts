// generated - do not edit!

import {server_CPhysConstraint} from './CPhysConstraint';
// Class size: 0x710
// BaseClass: : public CS2::server::CPhysConstraint
export const server_CPhysHinge  = {
	...server_CPhysConstraint,
	m_soundInfo: 1384n, // server::ConstraintSoundInfo  | Schema_DeclaredClass | Size: 0x98
	m_NotifyMinLimitReached: 1536n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_NotifyMaxLimitReached: 1576n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_bAtMinLimit: 1616n, // bool m_bAtMinLimit; |  0x650 | Schema_Builtin | Size: 0x1
	m_bAtMaxLimit: 1617n, // bool m_bAtMaxLimit; |  0x651 | Schema_Builtin | Size: 0x1
	m_hinge: 1620n, // vphysics2::constraint_hingeparams_t  | Schema_DeclaredClass | Size: 0x40
	m_hingeFriction: 1684n, // float32 m_hingeFriction; |  0x694 | Schema_Builtin | Size: 0x4
	m_systemLoadScale: 1688n, // float32 m_systemLoadScale; |  0x698 | Schema_Builtin | Size: 0x4
	m_bIsAxisLocal: 1692n, // bool m_bIsAxisLocal; |  0x69c | Schema_Builtin | Size: 0x1
	m_flMinRotation: 1696n, // float32 m_flMinRotation; |  0x6a0 | Schema_Builtin | Size: 0x4
	m_flMaxRotation: 1700n, // float32 m_flMaxRotation; |  0x6a4 | Schema_Builtin | Size: 0x4
	m_flInitialRotation: 1704n, // float32 m_flInitialRotation; |  0x6a8 | Schema_Builtin | Size: 0x4
	m_flMotorFrequency: 1708n, // float32 m_flMotorFrequency; |  0x6ac | Schema_Builtin | Size: 0x4
	m_flMotorDampingRatio: 1712n, // float32 m_flMotorDampingRatio; |  0x6b0 | Schema_Builtin | Size: 0x4
	m_flAngleSpeed: 1716n, // float32 m_flAngleSpeed; |  0x6b4 | Schema_Builtin | Size: 0x4
	m_flAngleSpeedThreshold: 1720n, // float32 m_flAngleSpeedThreshold; |  0x6b8 | Schema_Builtin | Size: 0x4
	m_OnStartMoving: 1728n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnStopMoving: 1768n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
}
