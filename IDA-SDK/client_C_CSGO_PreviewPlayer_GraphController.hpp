#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_ExternalAnimGraphHandle_t.hpp"

class client_C_CSGO_PreviewPlayer_GraphController {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    client_ExternalAnimGraphHandle_t m_hExternalGraph;
    char pad_1399[0x74];
    char m_pszCharacterMode[0x30];
    char m_pszTeamPreviewVariant[0x30];
    char m_pszTeamPreviewPosition[0x30];
    char m_pszEndOfMatchCelebration[0x30];
    char m_nTeamPreviewRandom[0x28];
    char m_pszWeaponState[0x30];
    char m_pszWeaponType[0x30];
    char m_bCT[0x28];
};
