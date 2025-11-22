// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x930
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CFuncTrackTrain  = {
	...server_CBaseModelEntity,
	m_ppath: 2008n, // GlobalTypes::CHandle<server::CPathTrack>  | Schema_Atomic | Size: 0x4
	m_length: 2012n, // float32 m_length; |  0x7dc | Schema_Builtin | Size: 0x4
	m_vPosPrev: 2016n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angPrev: 2028n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_controlMins: 2040n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_controlMaxs: 2052n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lastBlockPos: 2064n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lastBlockTick: 2076n, // int32_t m_lastBlockTick; |  0x81c | Schema_Builtin | Size: 0x4
	m_flVolume: 2080n, // float32 m_flVolume; |  0x820 | Schema_Builtin | Size: 0x4
	m_flBank: 2084n, // float32 m_flBank; |  0x824 | Schema_Builtin | Size: 0x4
	m_oldSpeed: 2088n, // float32 m_oldSpeed; |  0x828 | Schema_Builtin | Size: 0x4
	m_flBlockDamage: 2092n, // float32 m_flBlockDamage; |  0x82c | Schema_Builtin | Size: 0x4
	m_height: 2096n, // float32 m_height; |  0x830 | Schema_Builtin | Size: 0x4
	m_maxSpeed: 2100n, // float32 m_maxSpeed; |  0x834 | Schema_Builtin | Size: 0x4
	m_dir: 2104n, // float32 m_dir; |  0x838 | Schema_Builtin | Size: 0x4
	m_iszSoundMove: 2112n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSoundMovePing: 2120n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSoundStart: 2128n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSoundStop: 2136n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_strPathTarget: 2144n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flMoveSoundMinDuration: 2152n, // float32 m_flMoveSoundMinDuration; |  0x868 | Schema_Builtin | Size: 0x4
	m_flMoveSoundMaxDuration: 2156n, // float32 m_flMoveSoundMaxDuration; |  0x86c | Schema_Builtin | Size: 0x4
	m_flNextMoveSoundTime: 2160n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flMoveSoundMinPitch: 2164n, // float32 m_flMoveSoundMinPitch; |  0x874 | Schema_Builtin | Size: 0x4
	m_flMoveSoundMaxPitch: 2168n, // float32 m_flMoveSoundMaxPitch; |  0x878 | Schema_Builtin | Size: 0x4
	m_eOrientationType: 2172n, // server::TrainOrientationType_t  | Schema_DeclaredEnum | Size: 0x4
	m_eVelocityType: 2176n, // server::TrainVelocityType_t  | Schema_DeclaredEnum | Size: 0x4
	m_OnStart: 2200n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnNext: 2240n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnArrivedAtDestinationNode: 2280n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_bManualSpeedChanges: 2320n, // bool m_bManualSpeedChanges; |  0x910 | Schema_Builtin | Size: 0x1
	m_flDesiredSpeed: 2324n, // float32 m_flDesiredSpeed; |  0x914 | Schema_Builtin | Size: 0x4
	m_flSpeedChangeTime: 2328n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flAccelSpeed: 2332n, // float32 m_flAccelSpeed; |  0x91c | Schema_Builtin | Size: 0x4
	m_flDecelSpeed: 2336n, // float32 m_flDecelSpeed; |  0x920 | Schema_Builtin | Size: 0x4
	m_bAccelToSpeed: 2340n, // bool m_bAccelToSpeed; |  0x924 | Schema_Builtin | Size: 0x1
	m_flNextMPSoundTime: 2344n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
