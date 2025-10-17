#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class materialsystem2_MaterialResourceData_t {
    CUtlString m_materialName;
    CUtlString m_shaderName;
    char m_intParams[0x18];
    char m_floatParams[0x18];
    char m_vectorParams[0x18];
    char m_textureParams[0x18];
    char m_dynamicParams[0x18];
    char m_dynamicTextureParams[0x18];
    char m_intAttributes[0x18];
    char m_floatAttributes[0x18];
    char m_vectorAttributes[0x18];
    char m_textureAttributes[0x18];
    char m_stringAttributes[0x18];
    char m_renderAttributesUsed[0x18];
};
