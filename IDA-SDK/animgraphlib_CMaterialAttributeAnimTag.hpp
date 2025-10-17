#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimTagID.hpp"

class animgraphlib_CMaterialAttributeAnimTag {
    char vTable53[0x18];
    CGlobalSymbol m_name;
    CUtlString m_sComment;
    CGlobalSymbol m_group;
    modellib_AnimTagID m_tagID;
    char pad_54[0x14];
    bool m_bIsReferenced;
    char end_pad_55[0x7];
    char vTable173[0x8];
    CUtlString m_AttributeName;
    animgraphlib_MatterialAttributeTagType_t m_AttributeType;
    float32 m_flValue;
    Color m_Color;
    char end_pad_174[0x4];
};
