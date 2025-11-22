// generated - do not edit!

import {server_CPlayer_CameraServices} from './CPlayer_CameraServices';
// Class size: 0x1A8
// BaseClass: : public CS2::server::CPlayer_CameraServices
export const server_CCSPlayerBase_CameraServices  = {
	...server_CPlayer_CameraServices,
	m_iFOV: 368n, // uint32_t m_iFOV; |  0x170 | Schema_Builtin | Size: 0x4
	m_iFOVStart: 372n, // uint32_t m_iFOVStart; |  0x174 | Schema_Builtin | Size: 0x4
	m_flFOVTime: 376n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flFOVRate: 380n, // float32 m_flFOVRate; |  0x17c | Schema_Builtin | Size: 0x4
	m_hZoomOwner: 384n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hTriggerFogList: 392n, // server::CUtlVector<GlobalTypes::CHandle<server::CBaseEntity>>  | Schema_Atomic | Size: 0x18
	m_hLastFogTrigger: 416n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
}
