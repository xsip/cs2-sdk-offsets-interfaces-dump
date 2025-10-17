#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_ResponseParams.hpp"
#include "client_ResponseFollowup.hpp"

class client_CRR_Response {
    uint8_t m_Type;
    char m_szResponseName[192];
    char m_szMatchingRule[128];
    char pad_1058[0x1f];
    client_ResponseParams m_Params;
    float32 m_fMatchScore;
    bool m_bAnyMatchingRulesInCooldown;
    char pad_1059[0x3];
    char* m_szSpeakerContext;
    char* m_szWorldContext;
    client_ResponseFollowup m_Followup;
    char pad_1060[0x1];
    CUtlSymbol m_recipientFilter;
    char end_pad_1061[0x4];
};
