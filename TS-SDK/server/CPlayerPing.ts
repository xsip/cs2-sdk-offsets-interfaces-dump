// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x4D0
// BaseClass: : public CS2::server::CBaseEntity
export const server_CPlayerPing  = {
	...server_CBaseEntity,
	m_hPlayer: 1200n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_hPingedEntity: 1204n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iType: 1208n, // int32_t m_iType; |  0x4b8 | Schema_Builtin | Size: 0x4
	m_bUrgent: 1212n, // bool m_bUrgent; |  0x4bc | Schema_Builtin | Size: 0x1
	m_szPlaceName: 1213n, // char m_szPlaceName[18]; |  0x4bd | Schema_FixedArray | Size: 0x12
}
