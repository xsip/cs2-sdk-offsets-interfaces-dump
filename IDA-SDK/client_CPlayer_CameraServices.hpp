#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTick_t.hpp"
#include "client_C_fogplayerparams_t.hpp"
#include "client_audioparams_t.hpp"
#include "client_fogparams_t.hpp"

class client_CPlayer_CameraServices {
    void **__vftable_0;
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_2012[0x18];
    QAngle m_vecCsViewPunchAngle;
    entity2_GameTick_t m_nCsViewPunchAngleTick;
    float32 m_flCsViewPunchAngleTickRatio;
    char pad_1596[0x4];
    client_C_fogplayerparams_t m_PlayerFog;
    char m_hColorCorrectionCtrl[0x4];
    char m_hViewEntity[0x4];
    char m_hTonemapController[0x4];
    char pad_1597[0x4];
    client_audioparams_t m_audio;
    char m_PostProcessingVolumes[0x18];
    float32 m_flOldPlayerZ;
    float32 m_flOldPlayerViewOffsetZ;
    client_fogparams_t m_CurrentFog;
    char m_hOldFogController[0x4];
    bool m_bOverrideFogColor[5];
    Color m_OverrideFogColor[5];
    bool m_bOverrideFogStartEnd[5];
    char pad_1598[0x2];
    float32 m_fOverrideFogStart[5];
    float32 m_fOverrideFogEnd[5];
    char m_hActivePostProcessingVolume[0x4];
    QAngle m_angDemoViewAngles;
    char end_pad_1599[0x84];
};
