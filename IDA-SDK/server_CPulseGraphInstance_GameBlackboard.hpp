#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CPulseGraphInstance_GameBlackboard {
    char pad_2700[0x118];
    char vTable3968[0x78];
    char m_hOwner[0x4];
    bool m_bActivated;
    char pad_3969[0x3];
    CUtlSymbolLarge m_sNameFixupStaticPrefix;
    CUtlSymbolLarge m_sNameFixupParent;
    CUtlSymbolLarge m_sNameFixupLocal;
    CUtlSymbolLarge m_sProceduralWorldNameForRelays;
    char pad_3967[0x10];
};
