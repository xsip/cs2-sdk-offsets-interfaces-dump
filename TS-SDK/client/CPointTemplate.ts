// generated - do not edit!

import {client_CLogicalEntity} from './CLogicalEntity';
// Class size: 0x660
// BaseClass: : public CS2::client::CLogicalEntity
export const client_CPointTemplate  = {
	...client_CLogicalEntity,
	m_iszWorldName: 1528n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSource2EntityLumpName: 1536n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszEntityFilterName: 1544n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flTimeoutInterval: 1552n, // float32 m_flTimeoutInterval; |  0x610 | Schema_Builtin | Size: 0x4
	m_bAsynchronouslySpawnEntities: 1556n, // bool m_bAsynchronouslySpawnEntities; |  0x614 | Schema_Builtin | Size: 0x1
	m_clientOnlyEntityBehavior: 1560n, // client::PointTemplateClientOnlyEntityBehavior_t  | Schema_DeclaredEnum | Size: 0x4
	m_ownerSpawnGroupType: 1564n, // client::PointTemplateOwnerSpawnGroupType_t  | Schema_DeclaredEnum | Size: 0x4
	m_createdSpawnGroupHandles: 1568n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_SpawnedEntityHandles: 1592n, // GlobalTypes::CUtlVector<GlobalTypes::CEntityHandle>  | Schema_Atomic | Size: 0x18
	m_ScriptSpawnCallback: 1616n, // GlobalTypes::HSCRIPT  | Schema_Atomic | Size: 0x8
	m_ScriptCallbackScope: 1624n, // GlobalTypes::HSCRIPT  | Schema_Atomic | Size: 0x8
}
