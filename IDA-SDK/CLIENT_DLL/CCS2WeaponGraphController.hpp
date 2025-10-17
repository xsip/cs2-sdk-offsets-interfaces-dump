#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class CCS2WeaponGraphController {
    char _vtable_pad_16[0x28];
    char m_vecParamsToResetInPostGraphUpdate[0x58];
    char m_action[0x20];
    char m_bActionReset[0x18];
    char m_weaponCategory[0x20];
    char m_weaponType[0x20];
    char m_weaponExtraInfo[0x20];
    char m_flWeaponAmmo[0x18];
    char m_flWeaponAmmoMax[0x18];
    char m_flWeaponAmmoReserve[0x18];
    char m_bWeaponIsSilenced[0x18];
    char m_flWeaponIronsightAmount[0x18];
    char m_bIsUsingLegacyModel[0x18];
    char m_idleVariation[0x18];
    char m_deployVariation[0x18];
    char m_attackType[0x20];
    char m_attackThrowStrength[0x18];
    char m_flAttackVariation[0x18];
    char m_inspectVariation[0x18];
    char m_inspectExtraInfo[0x20];
    char m_reloadStage[0x20];
    char end_pad_229[0x368];
};
