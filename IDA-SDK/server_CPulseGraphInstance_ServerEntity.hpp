#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CPulseGraphInstance_ServerEntity {
    char pad_2701[0x118];
    char vTable3968[0x78];
    char m_hOwner[0x4];
    bool m_bActivated;
    char pad_3969[0x3];
    CUtlSymbolLarge m_sNameFixupStaticPrefix;
    CUtlSymbolLarge m_sNameFixupParent;
    CUtlSymbolLarge m_sNameFixupLocal;
    CUtlSymbolLarge m_sProceduralWorldNameForRelays;
};
