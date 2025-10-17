#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "ResponseParams.hpp"
#include "ResponseFollowup.hpp"

class CRR_Response {
    uint8_t m_Type;
    char m_szResponseName[192];
    char m_szMatchingRule[128];
    char pad_496[0x1f];
    ResponseParams m_Params;
    float32 m_fMatchScore;
    bool m_bAnyMatchingRulesInCooldown;
    char pad_497[0x3];
    char* m_szSpeakerContext;
    char* m_szWorldContext;
    ResponseFollowup m_Followup;
    char pad_498[0x1];
    CUtlSymbol m_recipientFilter;
    char end_pad_499[0x4];
};
