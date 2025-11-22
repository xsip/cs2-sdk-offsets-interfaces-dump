// generated - do not edit!

import {server_CLogicalEntity} from './CLogicalEntity';
// Class size: 0x558
// BaseClass: : public CS2::server::CLogicalEntity
export const server_CPhysMotor  = {
	...server_CLogicalEntity,
	m_nameAttach: 1264n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_nameAnchor: 1272n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hAttachedObject: 1280n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hAnchorObject: 1284n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_spinUp: 1288n, // float32 m_spinUp; |  0x508 | Schema_Builtin | Size: 0x4
	m_spinDown: 1292n, // float32 m_spinDown; |  0x50c | Schema_Builtin | Size: 0x4
	m_flMotorFriction: 1296n, // float32 m_flMotorFriction; |  0x510 | Schema_Builtin | Size: 0x4
	m_additionalAcceleration: 1300n, // float32 m_additionalAcceleration; |  0x514 | Schema_Builtin | Size: 0x4
	m_angularAcceleration: 1304n, // float32 m_angularAcceleration; |  0x518 | Schema_Builtin | Size: 0x4
	m_flTorqueScale: 1308n, // float32 m_flTorqueScale; |  0x51c | Schema_Builtin | Size: 0x4
	m_flTargetSpeed: 1312n, // float32 m_flTargetSpeed; |  0x520 | Schema_Builtin | Size: 0x4
	m_flSpeedWhenSpinUpOrSpinDownStarted: 1316n, // float32 m_flSpeedWhenSpinUpOrSpinDownStarted; |  0x524 | Schema_Builtin | Size: 0x4
	m_motor: 1336n, // server::CMotorController  | Schema_DeclaredClass | Size: 0x20
}
