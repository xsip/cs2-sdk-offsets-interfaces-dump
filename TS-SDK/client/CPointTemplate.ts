// generated - do not edit!

import {client_CLogicalEntity} from './CLogicalEntity';
// Class size: 0x670
// BaseClass: : public CS2::client::CLogicalEntity
export const client_CPointTemplate  = {
	...client_CLogicalEntity,
	m_iszWorldName: 1544n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSource2EntityLumpName: 1552n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszEntityFilterName: 1560n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flTimeoutInterval: 1568n, // float32 m_flTimeoutInterval; |  0x620 | Schema_Builtin | Size: 0x4
	m_bAsynchronouslySpawnEntities: 1572n, // bool m_bAsynchronouslySpawnEntities; |  0x624 | Schema_Builtin | Size: 0x1
	m_clientOnlyEntityBehavior: 1576n, // client::PointTemplateClientOnlyEntityBehavior_t  | Schema_DeclaredEnum | Size: 0x4
	m_ownerSpawnGroupType: 1580n, // client::PointTemplateOwnerSpawnGroupType_t  | Schema_DeclaredEnum | Size: 0x4
	m_createdSpawnGroupHandles: 1584n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_SpawnedEntityHandles: 1608n, // GlobalTypes::CUtlVector<GlobalTypes::CEntityHandle>  | Schema_Atomic | Size: 0x18
	m_ScriptSpawnCallback: 1632n, // GlobalTypes::HSCRIPT  | Schema_Atomic | Size: 0x8
	m_ScriptCallbackScope: 1640n, // GlobalTypes::HSCRIPT  | Schema_Atomic | Size: 0x8
}
