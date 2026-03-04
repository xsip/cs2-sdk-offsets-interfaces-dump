// generated - do not edit!

import {server_CPhysConstraint} from './CPhysConstraint';
// Class size: 0x5D0
// BaseClass: : public CS2::server::CPhysConstraint
export const server_CPhysSlideConstraint  = {
	...server_CPhysConstraint,
	m_axisEnd: 1296n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_slideFriction: 1308n, // float32 m_slideFriction; |  0x51c | Schema_Builtin | Size: 0x4
	m_systemLoadScale: 1312n, // float32 m_systemLoadScale; |  0x520 | Schema_Builtin | Size: 0x4
	m_initialOffset: 1316n, // float32 m_initialOffset; |  0x524 | Schema_Builtin | Size: 0x4
	m_bEnableLinearConstraint: 1320n, // bool m_bEnableLinearConstraint; |  0x528 | Schema_Builtin | Size: 0x1
	m_bEnableAngularConstraint: 1321n, // bool m_bEnableAngularConstraint; |  0x529 | Schema_Builtin | Size: 0x1
	m_flMotorFrequency: 1324n, // float32 m_flMotorFrequency; |  0x52c | Schema_Builtin | Size: 0x4
	m_flMotorDampingRatio: 1328n, // float32 m_flMotorDampingRatio; |  0x530 | Schema_Builtin | Size: 0x4
	m_bUseEntityPivot: 1332n, // bool m_bUseEntityPivot; |  0x534 | Schema_Builtin | Size: 0x1
	m_soundInfo: 1336n, // server::ConstraintSoundInfo  | Schema_DeclaredClass | Size: 0x98
}
