// generated - do not edit!

import {server_CPlayer_MovementServices_Humanoid} from './CPlayer_MovementServices_Humanoid';
// Class size: 0xE68
// BaseClass: : public CS2::server::CPlayer_MovementServices_Humanoid
export const server_CCSPlayer_MovementServices  = {
	...server_CPlayer_MovementServices_Humanoid,
	m_vecLadderNormal: 632n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nLadderSurfacePropIndex: 644n, // int32_t m_nLadderSurfacePropIndex; |  0x284 | Schema_Builtin | Size: 0x4
	m_bDucked: 648n, // bool m_bDucked; |  0x288 | Schema_Builtin | Size: 0x1
	m_flDuckAmount: 652n, // float32 m_flDuckAmount; |  0x28c | Schema_Builtin | Size: 0x4
	m_flDuckSpeed: 656n, // float32 m_flDuckSpeed; |  0x290 | Schema_Builtin | Size: 0x4
	m_bDuckOverride: 660n, // bool m_bDuckOverride; |  0x294 | Schema_Builtin | Size: 0x1
	m_bDesiresDuck: 661n, // bool m_bDesiresDuck; |  0x295 | Schema_Builtin | Size: 0x1
	m_bDucking: 662n, // bool m_bDucking; |  0x296 | Schema_Builtin | Size: 0x1
	m_flDuckOffset: 664n, // float32 m_flDuckOffset; |  0x298 | Schema_Builtin | Size: 0x4
	m_nDuckTimeMsecs: 668n, // uint32_t m_nDuckTimeMsecs; |  0x29c | Schema_Builtin | Size: 0x4
	m_nDuckJumpTimeMsecs: 672n, // uint32_t m_nDuckJumpTimeMsecs; |  0x2a0 | Schema_Builtin | Size: 0x4
	m_nJumpTimeMsecs: 676n, // uint32_t m_nJumpTimeMsecs; |  0x2a4 | Schema_Builtin | Size: 0x4
	m_flLastDuckTime: 680n, // float32 m_flLastDuckTime; |  0x2a8 | Schema_Builtin | Size: 0x4
	m_vecLastPositionAtFullCrouchSpeed: 696n, // GlobalTypes::Vector2D  | Schema_Atomic | Size: 0x8
	m_duckUntilOnGround: 704n, // bool m_duckUntilOnGround; |  0x2c0 | Schema_Builtin | Size: 0x1
	m_bHasWalkMovedSinceLastJump: 705n, // bool m_bHasWalkMovedSinceLastJump; |  0x2c1 | Schema_Builtin | Size: 0x1
	m_bInStuckTest: 706n, // bool m_bInStuckTest; |  0x2c2 | Schema_Builtin | Size: 0x1
	m_nTraceCount: 1232n, // int32_t m_nTraceCount; |  0x4d0 | Schema_Builtin | Size: 0x4
	m_StuckLast: 1236n, // int32_t m_StuckLast; |  0x4d4 | Schema_Builtin | Size: 0x4
	m_bSpeedCropped: 1240n, // bool m_bSpeedCropped; |  0x4d8 | Schema_Builtin | Size: 0x1
	m_nOldWaterLevel: 1244n, // int32_t m_nOldWaterLevel; |  0x4dc | Schema_Builtin | Size: 0x4
	m_flWaterEntryTime: 1248n, // float32 m_flWaterEntryTime; |  0x4e0 | Schema_Builtin | Size: 0x4
	m_vecForward: 1252n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecLeft: 1264n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecUp: 1276n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nGameCodeHasMovedPlayerAfterCommand: 1288n, // int32_t m_nGameCodeHasMovedPlayerAfterCommand; |  0x508 | Schema_Builtin | Size: 0x4
	m_bMadeFootstepNoise: 1292n, // bool m_bMadeFootstepNoise; |  0x50c | Schema_Builtin | Size: 0x1
	m_iFootsteps: 1296n, // int32_t m_iFootsteps; |  0x510 | Schema_Builtin | Size: 0x4
	m_fStashGrenadeParameterWhen: 1300n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nButtonDownMaskPrev: 1304n, // uint64_t m_nButtonDownMaskPrev; |  0x518 | Schema_Builtin | Size: 0x8
	m_flOffsetTickCompleteTime: 1312n, // float32 m_flOffsetTickCompleteTime; |  0x520 | Schema_Builtin | Size: 0x4
	m_flOffsetTickStashedSpeed: 1316n, // float32 m_flOffsetTickStashedSpeed; |  0x524 | Schema_Builtin | Size: 0x4
	m_flStamina: 1320n, // float32 m_flStamina; |  0x528 | Schema_Builtin | Size: 0x4
	m_flHeightAtJumpStart: 1324n, // float32 m_flHeightAtJumpStart; |  0x52c | Schema_Builtin | Size: 0x4
	m_flMaxJumpHeightThisJump: 1328n, // float32 m_flMaxJumpHeightThisJump; |  0x530 | Schema_Builtin | Size: 0x4
	m_flMaxJumpHeightLastJump: 1332n, // float32 m_flMaxJumpHeightLastJump; |  0x534 | Schema_Builtin | Size: 0x4
	m_flStaminaAtJumpStart: 1336n, // float32 m_flStaminaAtJumpStart; |  0x538 | Schema_Builtin | Size: 0x4
	m_flVelMulAtJumpStart: 1340n, // float32 m_flVelMulAtJumpStart; |  0x53c | Schema_Builtin | Size: 0x4
	m_flAccumulatedJumpError: 1344n, // float32 m_flAccumulatedJumpError; |  0x540 | Schema_Builtin | Size: 0x4
	m_LegacyJump: 1352n, // server::CCSPlayerLegacyJump  | Schema_DeclaredClass | Size: 0x18
	m_ModernJump: 1376n, // server::CCSPlayerModernJump  | Schema_DeclaredClass | Size: 0x38
	m_nLastJumpTick: 1432n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_flLastJumpFrac: 1436n, // float32 m_flLastJumpFrac; |  0x59c | Schema_Builtin | Size: 0x4
	m_flLastJumpVelocityZ: 1440n, // float32 m_flLastJumpVelocityZ; |  0x5a0 | Schema_Builtin | Size: 0x4
	m_bJumpApexPending: 1444n, // bool m_bJumpApexPending; |  0x5a4 | Schema_Builtin | Size: 0x1
	m_flTicksSinceLastSurfingDetected: 1448n, // float32 m_flTicksSinceLastSurfingDetected; |  0x5a8 | Schema_Builtin | Size: 0x4
	m_bWasSurfing: 1452n, // bool m_bWasSurfing; |  0x5ac | Schema_Builtin | Size: 0x1
	m_vecInputRotated: 1596n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
}
