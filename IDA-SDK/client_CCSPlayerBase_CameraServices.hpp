#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTick_t.hpp"
#include "client_C_fogplayerparams_t.hpp"
#include "client_audioparams_t.hpp"
#include "client_fogparams_t.hpp"
#include "entity2_GameTime_t.hpp"

class client_CCSPlayerBase_CameraServices {
    char vTable1197[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1198[0x10];
    QAngle m_vecCsViewPunchAngle;
    entity2_GameTick_t m_nCsViewPunchAngleTick;
    float32 m_flCsViewPunchAngleTickRatio;
    char pad_808[0x4];
    client_C_fogplayerparams_t m_PlayerFog;
    char m_hColorCorrectionCtrl[0x4];
    char m_hViewEntity[0x4];
    char m_hTonemapController[0x4];
    char pad_809[0x4];
    client_audioparams_t m_audio;
    char m_PostProcessingVolumes[0x18];
    float32 m_flOldPlayerZ;
    float32 m_flOldPlayerViewOffsetZ;
    client_fogparams_t m_CurrentFog;
    char m_hOldFogController[0x4];
    bool m_bOverrideFogColor[5];
    Color m_OverrideFogColor[5];
    bool m_bOverrideFogStartEnd[5];
    char pad_810[0x2];
    float32 m_fOverrideFogStart[5];
    float32 m_fOverrideFogEnd[5];
    char m_hActivePostProcessingVolume[0x4];
    QAngle m_angDemoViewAngles;
    char end_pad_811[0x84];
    uint32_t m_iFOV;
    uint32_t m_iFOVStart;
    entity2_GameTime_t m_flFOVTime;
    float32 m_flFOVRate;
    char m_hZoomOwner[0x4];
    float32 m_flLastShotFOV;
};
