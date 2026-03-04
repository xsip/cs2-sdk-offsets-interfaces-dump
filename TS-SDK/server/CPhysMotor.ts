// generated - do not edit!

import {server_CLogicalEntity} from './CLogicalEntity';
// Class size: 0x510
// BaseClass: : public CS2::server::CLogicalEntity
export const server_CPhysMotor  = {
	...server_CLogicalEntity,
	m_nameAttach: 1192n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_nameAnchor: 1200n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hAttachedObject: 1208n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hAnchorObject: 1212n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_spinUp: 1216n, // float32 m_spinUp; |  0x4c0 | Schema_Builtin | Size: 0x4
	m_spinDown: 1220n, // float32 m_spinDown; |  0x4c4 | Schema_Builtin | Size: 0x4
	m_flMotorFriction: 1224n, // float32 m_flMotorFriction; |  0x4c8 | Schema_Builtin | Size: 0x4
	m_additionalAcceleration: 1228n, // float32 m_additionalAcceleration; |  0x4cc | Schema_Builtin | Size: 0x4
	m_angularAcceleration: 1232n, // float32 m_angularAcceleration; |  0x4d0 | Schema_Builtin | Size: 0x4
	m_flTorqueScale: 1236n, // float32 m_flTorqueScale; |  0x4d4 | Schema_Builtin | Size: 0x4
	m_flTargetSpeed: 1240n, // float32 m_flTargetSpeed; |  0x4d8 | Schema_Builtin | Size: 0x4
	m_flSpeedWhenSpinUpOrSpinDownStarted: 1244n, // float32 m_flSpeedWhenSpinUpOrSpinDownStarted; |  0x4dc | Schema_Builtin | Size: 0x4
	m_motor: 1264n, // server::CMotorController  | Schema_DeclaredClass | Size: 0x20
}
