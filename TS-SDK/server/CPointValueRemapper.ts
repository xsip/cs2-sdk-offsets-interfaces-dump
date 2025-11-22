// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x6F8
// BaseClass: : public CS2::server::CBaseEntity
export const server_CPointValueRemapper  = {
	...server_CBaseEntity,
	m_bDisabled: 1264n, // bool m_bDisabled; |  0x4f0 | Schema_Builtin | Size: 0x1
	m_bUpdateOnClient: 1265n, // bool m_bUpdateOnClient; |  0x4f1 | Schema_Builtin | Size: 0x1
	m_nInputType: 1268n, // client::ValueRemapperInputType_t  | Schema_DeclaredEnum | Size: 0x4
	m_iszRemapLineStartName: 1272n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszRemapLineEndName: 1280n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hRemapLineStart: 1288n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hRemapLineEnd: 1292n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_flMaximumChangePerSecond: 1296n, // float32 m_flMaximumChangePerSecond; |  0x510 | Schema_Builtin | Size: 0x4
	m_flDisengageDistance: 1300n, // float32 m_flDisengageDistance; |  0x514 | Schema_Builtin | Size: 0x4
	m_flEngageDistance: 1304n, // float32 m_flEngageDistance; |  0x518 | Schema_Builtin | Size: 0x4
	m_bRequiresUseKey: 1308n, // bool m_bRequiresUseKey; |  0x51c | Schema_Builtin | Size: 0x1
	m_nOutputType: 1312n, // client::ValueRemapperOutputType_t  | Schema_DeclaredEnum | Size: 0x4
	m_iszOutputEntityName: 1320n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszOutputEntity2Name: 1328n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszOutputEntity3Name: 1336n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszOutputEntity4Name: 1344n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hOutputEntities: 1352n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CBaseEntity>>  | Schema_Atomic | Size: 0x18
	m_nHapticsType: 1376n, // client::ValueRemapperHapticsType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nMomentumType: 1380n, // client::ValueRemapperMomentumType_t  | Schema_DeclaredEnum | Size: 0x4
	m_flMomentumModifier: 1384n, // float32 m_flMomentumModifier; |  0x568 | Schema_Builtin | Size: 0x4
	m_flSnapValue: 1388n, // float32 m_flSnapValue; |  0x56c | Schema_Builtin | Size: 0x4
	m_flCurrentMomentum: 1392n, // float32 m_flCurrentMomentum; |  0x570 | Schema_Builtin | Size: 0x4
	m_nRatchetType: 1396n, // client::ValueRemapperRatchetType_t  | Schema_DeclaredEnum | Size: 0x4
	m_flRatchetOffset: 1400n, // float32 m_flRatchetOffset; |  0x578 | Schema_Builtin | Size: 0x4
	m_flInputOffset: 1404n, // float32 m_flInputOffset; |  0x57c | Schema_Builtin | Size: 0x4
	m_bEngaged: 1408n, // bool m_bEngaged; |  0x580 | Schema_Builtin | Size: 0x1
	m_bFirstUpdate: 1409n, // bool m_bFirstUpdate; |  0x581 | Schema_Builtin | Size: 0x1
	m_flPreviousValue: 1412n, // float32 m_flPreviousValue; |  0x584 | Schema_Builtin | Size: 0x4
	m_flPreviousUpdateTickTime: 1416n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecPreviousTestPoint: 1420n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hUsingPlayer: 1432n, // GlobalTypes::CHandle<server::CBasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_flCustomOutputValue: 1436n, // float32 m_flCustomOutputValue; |  0x59c | Schema_Builtin | Size: 0x4
	m_iszSoundEngage: 1440n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSoundDisengage: 1448n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSoundReachedValueZero: 1456n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSoundReachedValueOne: 1464n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSoundMovingLoop: 1472n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_Position: 1504n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
	m_PositionDelta: 1544n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
	m_OnReachedValueZero: 1584n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnReachedValueOne: 1624n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnReachedValueCustom: 1664n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnEngage: 1704n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnDisengage: 1744n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
}
