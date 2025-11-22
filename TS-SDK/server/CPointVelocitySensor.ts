// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x538
// BaseClass: : public CS2::server::CPointEntity
export const server_CPointVelocitySensor  = {
	...server_CPointEntity,
	m_hTargetEntity: 1264n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_vecAxis: 1268n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bEnabled: 1280n, // bool m_bEnabled; |  0x500 | Schema_Builtin | Size: 0x1
	m_fPrevVelocity: 1284n, // float32 m_fPrevVelocity; |  0x504 | Schema_Builtin | Size: 0x4
	m_flAvgInterval: 1288n, // float32 m_flAvgInterval; |  0x508 | Schema_Builtin | Size: 0x4
	m_Velocity: 1296n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
}
