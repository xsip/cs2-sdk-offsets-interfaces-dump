#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class server_locksound_t {
    char vTable2899[0x8];
    CUtlSymbolLarge sLockedSound;
    CUtlSymbolLarge sUnlockedSound;
    entity2_GameTime_t flwaitSound;
    char pad_2900[0x4];
};
