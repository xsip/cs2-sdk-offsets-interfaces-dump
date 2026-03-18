#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_ExternalAnimGraphHandle_t.hpp"

class client_CCS2WeaponGraphController {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    client_ExternalAnimGraphHandle_t m_hExternalGraph;
    char pad_1399[0x74];
    char m_action[0x18];
    char m_bActionReset[0x18];
    char m_flWeaponActionSpeedScale[0x18];
    char m_weaponCategory[0x18];
    char m_weaponType[0x18];
    char m_weaponExtraInfo[0x18];
    char m_flWeaponAmmo[0x18];
    char m_flWeaponAmmoMax[0x18];
    char m_flWeaponAmmoReserve[0x18];
    char m_bWeaponIsSilenced[0x18];
    char m_flWeaponIronsightAmount[0x18];
    char m_bIsUsingLegacyModel[0x18];
    char m_idleVariation[0x18];
    char m_deployVariation[0x18];
    char m_attackType[0x18];
    char m_attackThrowStrength[0x18];
    char m_flAttackVariation[0x18];
    char m_inspectVariation[0x18];
    char m_inspectExtraInfo[0x18];
    char m_reloadStage[0x18];
    char end_pad_1581[0x30];
};
