#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTick_t.hpp"
#include "server_fogplayerparams_t.hpp"
#include "server_audioparams_t.hpp"
#include "entity2_GameTime_t.hpp"

class server_CCSPlayer_CameraServices {
    char vTable1197[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1198[0x10];
    QAngle m_vecCsViewPunchAngle;
    entity2_GameTick_t m_nCsViewPunchAngleTick;
    float32 m_flCsViewPunchAngleTickRatio;
    char pad_3341[0x4];
    server_fogplayerparams_t m_PlayerFog;
    char m_hColorCorrectionCtrl[0x4];
    char m_hViewEntity[0x4];
    char m_hTonemapController[0x4];
    char pad_3342[0x4];
    server_audioparams_t m_audio;
    char m_PostProcessingVolumes[0x18];
    float32 m_flOldPlayerZ;
    float32 m_flOldPlayerViewOffsetZ;
    char pad_3343[0x18];
    char m_hTriggerSoundscapeList[0x18];
    uint32_t m_iFOV;
    uint32_t m_iFOVStart;
    entity2_GameTime_t m_flFOVTime;
    float32 m_flFOVRate;
    char m_hZoomOwner[0x4];
    char pad_3339[0x4];
    char m_hTriggerFogList[0x18];
    char m_hLastFogTrigger[0x4];
    char end_pad_3340[0x4];
};
