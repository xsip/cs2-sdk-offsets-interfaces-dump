#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class server_ResponseContext_t {
    CUtlSymbolLarge m_iszName;
    CUtlSymbolLarge m_iszValue;
    entity2_GameTime_t m_fExpirationTime;
    char end_pad_2777[0x4];
};
