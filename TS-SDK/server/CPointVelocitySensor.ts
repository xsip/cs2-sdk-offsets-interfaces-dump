// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x4E8
// BaseClass: : public CS2::server::CPointEntity
export const server_CPointVelocitySensor  = {
	...server_CPointEntity,
	m_hTargetEntity: 1192n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_vecAxis: 1196n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bEnabled: 1208n, // bool m_bEnabled; |  0x4b8 | Schema_Builtin | Size: 0x1
	m_fPrevVelocity: 1212n, // float32 m_fPrevVelocity; |  0x4bc | Schema_Builtin | Size: 0x4
	m_flAvgInterval: 1216n, // float32 m_flAvgInterval; |  0x4c0 | Schema_Builtin | Size: 0x4
	m_Velocity: 1224n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
}
