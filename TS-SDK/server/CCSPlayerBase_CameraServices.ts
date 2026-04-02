// generated - do not edit!

import {server_CPlayer_CameraServices} from './CPlayer_CameraServices';
// Class size: 0x1B0
// BaseClass: : public CS2::server::CPlayer_CameraServices
export const server_CCSPlayerBase_CameraServices  = {
	...server_CPlayer_CameraServices,
	m_iFOV: 376n, // uint32_t m_iFOV; |  0x178 | Schema_Builtin | Size: 0x4
	m_iFOVStart: 380n, // uint32_t m_iFOVStart; |  0x17c | Schema_Builtin | Size: 0x4
	m_flFOVTime: 384n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flFOVRate: 388n, // float32 m_flFOVRate; |  0x184 | Schema_Builtin | Size: 0x4
	m_hZoomOwner: 392n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hTriggerFogList: 400n, // GlobalTypes::CUtlVector<GlobalTypes::CHandle<server::CBaseEntity>>  | Schema_Atomic | Size: 0x18
	m_hLastFogTrigger: 424n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
}
