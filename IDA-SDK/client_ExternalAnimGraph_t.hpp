#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_ExternalAnimGraphHandle_t.hpp"

class client_ExternalAnimGraph_t {
    client_ExternalAnimGraphHandle_t m_hExtGraphHandle;
    char pad_2436[0x4];
    CGlobalSymbol m_sExternalGraphSlotID;
    char m_hGraphDefinition[0x8];
    char m_hExternalGraphOwner[0x4];
    char pad_2437[0x14];
    client_ExternalAnimGraphInactiveBehavior_t m_nInactiveBehavior;
    char end_pad_2438[0x7];
};
