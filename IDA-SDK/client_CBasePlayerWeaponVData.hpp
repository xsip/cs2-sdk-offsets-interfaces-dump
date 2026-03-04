#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_AmmoIndex_t.hpp"
#include "client_AmmoIndex_t.hpp"

class client_CBasePlayerWeaponVData {
    char pad_1546[0x28];
    char m_szWorldModel[0xe0];
    char m_sToolsOnlyOwnerModelName[0xe0];
    bool m_bBuiltRightHanded;
    bool m_bAllowFlipping;
    char pad_1547[0x6];
    CAttachmentNameSymbolWithStorage m_sMuzzleAttachment;
    char m_szMuzzleFlashParticle[0xe0];
    CUtlString m_szMuzzleFlashParticleConfig;
    char m_szBarrelSmokeParticle[0xe0];
    uint8_t m_nMuzzleSmokeShotThreshold;
    char pad_1548[0x3];
    float32 m_flMuzzleSmokeTimeout;
    float32 m_flMuzzleSmokeDecrementRate;
    bool m_bGenerateMuzzleLight;
    bool m_bLinkedCooldowns;
    client_ItemFlagTypes_t m_iFlags;
    char pad_1549[0x1];
    int32_t m_iWeight;
    bool m_bAutoSwitchTo;
    bool m_bAutoSwitchFrom;
    client_AmmoIndex_t m_nPrimaryAmmoType;
    client_AmmoIndex_t m_nSecondaryAmmoType;
    int32_t m_iMaxClip1;
    int32_t m_iMaxClip2;
    int32_t m_iDefaultClip1;
    int32_t m_iDefaultClip2;
    bool m_bReserveAmmoAsClips;
    bool m_bTreatAsSingleClip;
    bool m_bKeepLoadedAmmo;
    char pad_1550[0x1];
    client_RumbleEffect_t m_iRumbleEffect;
    float32 m_flDropSpeed;
    int32_t m_iSlot;
    int32_t m_iPosition;
    char pad_1551[0x4];
    char m_aShootSounds[0x28];
};
