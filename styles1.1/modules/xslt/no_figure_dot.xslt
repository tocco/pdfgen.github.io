<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">

<xsl:template name="place-fig-lbl">
    <xsl:param name="stringName"/>
    <!-- Number of fig/title's including this one -->
    <xsl:variable name="fig-count-actual" select="count(preceding::*[contains(@class, ' topic/fig ')]//*[contains(@class, ' topic/title ')]) - count(/normalized/map//*[contains(@class, ' topic/fig ')]//*[contains(@class, ' topic/title ')]) +1"/>
    <xsl:variable name="ancestorlang">
    <xsl:call-template name="getLowerCaseLang"/>
    </xsl:variable>
    <xsl:choose>
    <!-- title -or- title & desc -->
    <xsl:when test="*[contains(@class, ' topic/title ')]">
        <figcaption>
        <span class="fig--title-label">
            <xsl:choose>      <!-- Hungarian: "1. Figure " -->
            <xsl:when test="$ancestorlang = ('hu', 'hu-hu')">
                <xsl:value-of select="$fig-count-actual"/>
                <xsl:text>. </xsl:text>
                <xsl:call-template name="getVariable">
                <xsl:with-param name="id" select="'Figure'"/>
                </xsl:call-template>
                <xsl:text> </xsl:text>
            </xsl:when>
            <xsl:otherwise>
                <xsl:call-template name="getVariable">
                <xsl:with-param name="id" select="'Figure'"/>
                </xsl:call-template>
                <xsl:text> </xsl:text>
                <xsl:value-of select="$fig-count-actual"/>
                <xsl:text>. </xsl:text>
            </xsl:otherwise>
            </xsl:choose>
        </span>
        <xsl:apply-templates select="*[contains(@class, ' topic/title ')]" mode="figtitle"/>
        <xsl:if test="*[contains(@class, ' topic/desc ')]">
            <!--<xsl:text>. </xsl:text> -->
        </xsl:if>
        <xsl:for-each select="*[contains(@class, ' topic/desc ')]">
            <span class="figdesc">
            <xsl:call-template name="commonattributes"/>
            <xsl:apply-templates select="." mode="figdesc"/>
            </span>
        </xsl:for-each>
        </figcaption>
    </xsl:when>
    <!-- desc -->
    <xsl:when test="*[contains(@class, ' topic/desc ')]">
        <xsl:for-each select="*[contains(@class, ' topic/desc ')]">
        <figcaption>
            <xsl:call-template name="commonattributes"/>
            <xsl:apply-templates select="." mode="figdesc"/>
        </figcaption>
        </xsl:for-each>
    </xsl:when>
    </xsl:choose>
</xsl:template>

</xsl:stylesheet>