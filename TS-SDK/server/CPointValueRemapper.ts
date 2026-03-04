// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x650
// BaseClass: : public CS2::server::CBaseEntity
export const server_CPointValueRemapper  = {
	...server_CBaseEntity,
	m_bDisabled: 1192n, // bool m_bDisabled; |  0x4a8 | Schema_Builtin | Size: 0x1
	m_bUpdateOnClient: 1193n, // bool m_bUpdateOnClient; |  0x4a9 | Schema_Builtin | Size: 0x1
	m_nInputType: 1196n, // client::ValueRemapperInputType_t  | Schema_DeclaredEnum | Size: 0x4
	m_iszRemapLineStartName: 1200n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszRemapLineEndName: 1208n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hRemapLineStart: 1216n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hRemapLineEnd: 1220n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_flMaximumChangePerSecond: 1224n, // float32 m_flMaximumChangePerSecond; |  0x4c8 | Schema_Builtin | Size: 0x4
	m_flDisengageDistance: 1228n, // float32 m_flDisengageDistance; |  0x4cc | Schema_Builtin | Size: 0x4
	m_flEngageDistance: 1232n, // float32 m_flEngageDistance; |  0x4d0 | Schema_Builtin | Size: 0x4
	m_bRequiresUseKey: 1236n, // bool m_bRequiresUseKey; |  0x4d4 | Schema_Builtin | Size: 0x1
	m_nOutputType: 1240n, // client::ValueRemapperOutputType_t  | Schema_DeclaredEnum | Size: 0x4
	m_iszOutputEntityName: 1248n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszOutputEntity2Name: 1256n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszOutputEntity3Name: 1264n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszOutputEntity4Name: 1272n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hOutputEntities: 1280n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CBaseEntity>>  | Schema_Atomic | Size: 0x18
	m_nHapticsType: 1304n, // client::ValueRemapperHapticsType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nMomentumType: 1308n, // client::ValueRemapperMomentumType_t  | Schema_DeclaredEnum | Size: 0x4
	m_flMomentumModifier: 1312n, // float32 m_flMomentumModifier; |  0x520 | Schema_Builtin | Size: 0x4
	m_flSnapValue: 1316n, // float32 m_flSnapValue; |  0x524 | Schema_Builtin | Size: 0x4
	m_flCurrentMomentum: 1320n, // float32 m_flCurrentMomentum; |  0x528 | Schema_Builtin | Size: 0x4
	m_nRatchetType: 1324n, // client::ValueRemapperRatchetType_t  | Schema_DeclaredEnum | Size: 0x4
	m_flRatchetOffset: 1328n, // float32 m_flRatchetOffset; |  0x530 | Schema_Builtin | Size: 0x4
	m_flInputOffset: 1332n, // float32 m_flInputOffset; |  0x534 | Schema_Builtin | Size: 0x4
	m_bEngaged: 1336n, // bool m_bEngaged; |  0x538 | Schema_Builtin | Size: 0x1
	m_bFirstUpdate: 1337n, // bool m_bFirstUpdate; |  0x539 | Schema_Builtin | Size: 0x1
	m_flPreviousValue: 1340n, // float32 m_flPreviousValue; |  0x53c | Schema_Builtin | Size: 0x4
	m_flPreviousUpdateTickTime: 1344n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecPreviousTestPoint: 1348n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hUsingPlayer: 1360n, // GlobalTypes::CHandle<server::CBasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_flCustomOutputValue: 1364n, // float32 m_flCustomOutputValue; |  0x554 | Schema_Builtin | Size: 0x4
	m_iszSoundEngage: 1368n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSoundDisengage: 1376n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSoundReachedValueZero: 1384n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSoundReachedValueOne: 1392n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSoundMovingLoop: 1400n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_Position: 1432n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
	m_PositionDelta: 1464n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
	m_OnReachedValueZero: 1496n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnReachedValueOne: 1520n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnReachedValueCustom: 1544n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnEngage: 1568n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnDisengage: 1592n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
}
