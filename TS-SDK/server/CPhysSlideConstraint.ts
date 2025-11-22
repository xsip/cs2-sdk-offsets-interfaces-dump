// generated - do not edit!

import {server_CPhysConstraint} from './CPhysConstraint';
// Class size: 0x628
// BaseClass: : public CS2::server::CPhysConstraint
export const server_CPhysSlideConstraint  = {
	...server_CPhysConstraint,
	m_axisEnd: 1384n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_slideFriction: 1396n, // float32 m_slideFriction; |  0x574 | Schema_Builtin | Size: 0x4
	m_systemLoadScale: 1400n, // float32 m_systemLoadScale; |  0x578 | Schema_Builtin | Size: 0x4
	m_initialOffset: 1404n, // float32 m_initialOffset; |  0x57c | Schema_Builtin | Size: 0x4
	m_bEnableLinearConstraint: 1408n, // bool m_bEnableLinearConstraint; |  0x580 | Schema_Builtin | Size: 0x1
	m_bEnableAngularConstraint: 1409n, // bool m_bEnableAngularConstraint; |  0x581 | Schema_Builtin | Size: 0x1
	m_flMotorFrequency: 1412n, // float32 m_flMotorFrequency; |  0x584 | Schema_Builtin | Size: 0x4
	m_flMotorDampingRatio: 1416n, // float32 m_flMotorDampingRatio; |  0x588 | Schema_Builtin | Size: 0x4
	m_bUseEntityPivot: 1420n, // bool m_bUseEntityPivot; |  0x58c | Schema_Builtin | Size: 0x1
	m_soundInfo: 1424n, // server::ConstraintSoundInfo  | Schema_DeclaredClass | Size: 0x98
}
